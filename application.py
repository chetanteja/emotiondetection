from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import numpy as np
import tensorflow
from keras.preprocessing import image
from keras.models import load_model
import base64
import base64
from PIL import Image
from io import BytesIO
from keras.metrics import categorical_accuracy
import cv2


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

def baseline_model_saved():
    json_file = open(r'model.json')
    loaded_model_json = json_file.read()
    json_file.close()
    model = tensorflow.keras.models.model_from_json(loaded_model_json)
    model.load_weights("model.h5")
    model.compile(optimizer='adam', loss='binary_crossentropy', metrics=[categorical_accuracy])
    return model 

@app.route('/', methods=['POST'])
@cross_origin()
def handle_post_request():

    image_data = request.json['image_data']
    base64_str = image_data.split(',')[1]
    decoded_data=base64.b64decode((base64_str))
    image = Image.open(BytesIO(decoded_data))

    image = image.convert('RGB')

    image.save('image.jpg', 'JPEG')

    model = baseline_model_saved()
    # model = load_model('my_model.h5')

    full_size_image = cv2.imread("image.jpg")
    gray=cv2.cvtColor(full_size_image,cv2.COLOR_RGB2GRAY)
    face=cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    faces = face.detectMultiScale(gray, 1.3  , 5)

    label_list = ['Sad', 'Happy']
    emotion=""
    for (x, y, w, h) in faces:
            roi_gray = gray[y:y + h, x:x + w]
            cropped_img = np.expand_dims(np.expand_dims(cv2.resize(roi_gray, (48, 48)), -1), 0)
            cv2.normalize(cropped_img, cropped_img, alpha=0, beta=1, norm_type=cv2.NORM_L2, dtype=cv2.CV_32F)
            cv2.rectangle(full_size_image, (x, y), (x + w, y + h), (0, 255, 0), 1)
            yhat= model.predict(cropped_img)
            cv2.putText(full_size_image, label_list[int(np.argmax(yhat))], (x, y), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 1, cv2.LINE_AA)
            emotion=label_list[int(np.argmax(yhat))]

    return jsonify({'output': emotion})


if __name__ == '__main__':
    app.run(debug=True)