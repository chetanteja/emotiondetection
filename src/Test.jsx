import React, {useEffect, useState } from 'react';
import {Row,Col, Button} from 'react-bootstrap'

function Test() {

    
    const quizzes = [
        {
        "question": "How many fish are there?",
        "img":"1.jpg",
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "correct": "c"
        },
        {
        "question": "Even number that comes after 13:",
        "img":"",
        "a": "12",
        "b": "10",
        "c": "14",
        "d": "11",
        "correct": "c"
        },
        {
        "question": "Select the odd number from the list:  2,4,5,6,8",
        "img":"",
        "a": "4",
        "b": "6",
        "c": "5",
        "d": "2",
        "correct": "c"
        },
        {
        "question": "Is 4 even or odd?",
        "img":"",
        "a": "even",
        "b": "odd",
        "c": "none",
        "d": "both",
        "correct": "a"
        },
        {
        "question": "3 + 2= ",
        "img":"",
        "a": "2",
        "b": "3",
        "c": "5",
        "d": "4",
        "correct": "c"
        },
        {
        "question": "Add the apples in the following figure:",
        "img":"2.jpg",
        "a": "7",
        "b": "8",
        "c": "6",
        "d": "9",
        "correct": "d"
        },
        {
        "question": "There is 1 book on a shelf. 3 more books are added. Now how many books are there on the shelf?",
        "img":"",
        "a": "2",
        "b": "3",
        "c": "4",
        "d": "5",
        "correct": "c"
        },
        {
        "question": "Miley has 9 chocolate bars. If mom gives her 5 more, how many chocolate bars are there in total?",
        "img":"",
        "a": "10",
        "b": "11",
        "c": "13",
        "d": "14",
        "correct": "d"
        },
        {
        "question": "Add the items in the following figure:",
        "img":"3.jpg",
        "a": "4",
        "b": "5",
        "c": "6",
        "d": "7",
        "correct": "b"
        },
        {
        "question": "Subtract the items in the following figure:",
        "img":"4.jpg",
        "a": "4",
        "b": "5",
        "c": "6",
        "d": "3",
        "correct": "b"
        },
        {
        "question": "19+22=",
        "img":"",
        "a": "41",
        "b": "50",
        "c": "42",
        "d": "45",
        "correct": "a"
        },
        {
        "question": "How do you make 60 ?",
        "img":"",
        "a": "42 + 19",
        "b": "26 + 35",
        "c": "37 +23",
        "d": "35 + 35",
        "correct": "c"
        },
        {
        "question": "There are two display cakes in a bakery, the first cake contains 21 cookies and the second cake contains 34 cookies. How many cookies are there in all ?",
        "img":"",
        "a": "41",
        "b": "55",
        "c": "52",
        "d": "54",
        "correct": "b"
        },
        {
        "question": "In the movie spiderman defeated 17 villains, whereas hulk defeated 36 villains. In total how many villains were destroyed ?",
        "img":"",
        "a": "53",
        "b": "50",
        "c": "52",
        "d": "55",
        "correct": "a"
        },
        {
        "question": "38-17=",
        "img":"",
        "a": "21",
        "b": "20",
        "c": "22",
        "d": "25",
        "correct": "a"
        },
        {
        "question": "How to make 8 ?",
        "img":"",
        "a": "20 - 13",
        "b": "16 - 10",
        "c": "10 - 2",
        "d": "16 - 6",
        "correct": "c"
        },
        {
        "question": "How to derive 19 ?",
        "img":"",
        "a": "45 - 26",
        "b": "39 - 21",
        "c": "87 - 67",
        "d": "89 - 71",
        "correct": "a"
        },
        {
        "question": "Ironman has a total of 99 suits whereas he lost 34 suits in the end game. How many suits did he have now ?",
        "img":"",
        "a": "61",
        "b": "60",
        "c": "62",
        "d": "65",
        "correct": "d"
        },
        {
        "question": "You bought 88 chocolates on your birthday. Your class has a strength of 65. How many chocolates did you have after distributing?",
        "img":"",
        "a": "23",
        "b": "20",
        "c": "22",
        "d": "25",
        "correct": "a"
        },
        {
        "question": "Which makes the statement true?   23 ___ 56",
        "img":"",
        "a": "Is less than",
        "b": "Is greater than",
        "c": "Is equal to",
        "d": "none",
        "correct": "a"
        },
        {
        "question": "Which makes the statement true?   67 ___ 66",
        "Img":"",
        "a": "Is less than",
        "b": "Is greater than",
        "c": "Is equal to",
        "d": "none",
        "correct": "b"
        },
        {
        "question": "How many days are there in a week?",
        "img":"",
        "a": "5",
        "b": "6",
        "c": "7",
        "d": "8",
        "correct": "c"
        },
        {
        "question": "What day is after sunday?",
        "img":"",
        "a": "Monday",
        "b": "Tuesday",
        "c": "Wednesday",
        "d": "Thursday",
        "correct": "a"
        },
        {
        "question": "Multiply the following: 2 * 5 =",
        "img":"",
        "a": "10",
        "b": "11",
        "c": "9",
        "d": "8",
        "correct": "a"
        },
        {
        "question": "Identify the fraction given below in the following figure:",
        "img":"5.jpg",
        "a": "2/3",
        "b": "1/3",
        "c": "3/4",
        "d": "2/4",
        "correct": "b"
        },
    ]

    const quizzes1 = [
        {
        "question": "How many flowers are there?",
        "img":"1.jpg",
        "a": "5",
        "b": "6",
        "c": "7",
        "d": "8",
        "correct": "d"
        },
        {
        "question": " Odd number that comes before 6:",
        "img":"",
        "a": "3",
        "b": "4",
        "c": "5",
        "d": "6",
        "correct": "c"
        },
        {
        "question": "Select the even number from the list:  3,5,7,8",
        "img":"",
        "a": "3",
        "b": "5",
        "c": "7",
        "d": "8",
        "correct": "d"
        },
        {
        "question": "Add the mangoes in the following figure:",
        "img":"2.jpg",
        "a": "5",
        "b": "6",
        "c": "8",
        "d": "7",
        "correct": "c"
        },
        {
        "question": "9 + 4= ",
        "img":"",
        "a": "12",
        "b": "13",
        "c": "15",
        "d": "14",
        "correct": "b"
        },
        {
        "question": "Clara bought a necklace for $5 and a bracelet for $7 at a clearance sale. How much money did she spend in all?",
        "img":"",
        "a": "11",
        "b": "12",
        "c": "13",
        "d": "14",
        "correct": "b"
        },
        {
        "question": " Shreya has 6 apples . She ate 2 apples . How many does she have left?",
        "img":"",
        "a": "2",
        "b": "3",
        "c": "4",
        "d": "5",
        "correct": "c"
        },
        {
        "question": "10 - 2 = ",
        "img":"",
        "a": "5",
        "b": "8",
        "c": "6",
        "d": "7",
        "correct": "b"
        },
        {
        "question": "Subtract the items in the following figure:",
        "img":"3.jpg",
        "a": "4",
        "b": "5",
        "c": "6",
        "d": "3",
        "correct": "a"
        },
        {
        "question": "52 + 31 =",
        "img":"",
        "a": "84",
        "b": "85",
        "c": "86",
        "d": "83",
        "correct": "d"
        },
        {
        "question": "19+22=",
        "img":"",
        "a": "41",
        "b": "50",
        "c": "42",
        "d": "45",
        "correct": "a"
        },
        {
        "question": "How do you make 75?",
        "img":"",
        "a": "25 + 50",
        "b": "13 + 63",
        "c": "69 + 25",
        "d": "61 + 13",
        "correct": "a"
        },
        {
        "question": "A school fair sold 15 picture books and 21 comic books. How many books were sold in total?",
        "img":"",
        "a": "40",
        "b": "38",
        "c": "36",
        "d": "34",
        "correct": "c"
        },
        {
        "question": "7 + 6 + 14 = ?",
        "img":"",
        "a": "23",
        "b": "24",
        "c": "28",
        "d": "27",
        "correct": "d"
        },
        {
        "question": "Multiply the following: 8 * 5 =",
        "img":"",
        "a": "40",
        "b": "41",
        "c": "49",
        "d": "48",
        "correct": "a"
        },
        {
        "question": "Divide the following: 10 / 5 =",
        "img":"",
        "a": "2",
        "b": "3",
        "c": "4",
        "d": "5",
        "correct": "a"
        },
        {
        "question": "How to derive 19 ?",
        "img":"",
        "a": "45 - 26",
        "b": "39 - 21",
        "c": "87 - 67",
        "d": "89 - 71",
        "correct": "a"
        },
        {
        "question": "Which number makes the equation true ?     ___ - 12 = 16 - 15",
        "img":"",
        "a": "11",
        "b": "10",
        "c": "12",
        "d": "13",
        "correct": "d"
        },
        {
        "question": "Which number makes the equation true ?      17 - 10 = __ - 22",
        "img":"",
        "a": "23",
        "b": "29",
        "c": "22",
        "d": "25",
        "correct": "b"
        },
        {
        "question": "Which makes the statement true?       10 ___ 10",
        "img":"",
        "a": "Is less than",
        "b": "Is greater than",
        "c": "Is equal to",
        "d": "none",
        "correct": "c"
        },
        {
        "question": "Which makes the statement true?      77 ___ 66",
        "Img":"",
        "a": "Is less than",
        "b": "Is greater than",
        "c": "Is equal to",
        "d": "none",
        "correct": "b"
        },
        {
        "question": "How many days are there in a week?",
        "img":"",
        "a": "5",
        "b": "6",
        "c": "7",
        "d": "8",
        "correct": "c"
        },
        {
        "question": "What day is after tuesday?",
        "img":"",
        "a": "Monday",
        "b": "Tuesday",
        "c": "Wednesday",
        "d": "Thursday",
        "correct": "c"
        },
        {
        "question": "Suresh’s mom bought 36 pieces of pizza and there were 6 children.How many pieces did each child receive?",
        "img":"",
        "a": "6",
        "b": "7",
        "c": "9",
        "d": "8",
        "correct": "a"
        },
        {
        "question": "Identify the fraction given below in the following figure:",
        "img":"4.jpg",
        "a": "2/3",
        "b": "1/3",
        "c": "3/4",
        "d": "2/4",
        "correct": "d"
        },
    ]
        
        

    const [answer_set,setAnswer] = useState({}) 

    const [curr_question, setCurrent] = useState(0)

    useEffect(()=>{
        const cq = localStorage.getItem('curr_question')
        if(cq){
            setCurrent(parseInt(cq))
        }
    },[])
    

    const nextQuestion = () =>{
        const temp = curr_question
        if(answer_set[curr_question+1]===quizzes[curr_question]["correct"]){
            setCurrent(temp+1)
            localStorage.setItem('curr_question',temp+1);
        }
        else{
            setCurrent(temp) 
            localStorage.setItem('curr_question',temp); 
        }
        
    }
    const clearOption = () =>{
        setAnswer({...answer_set,[parseInt(curr_question+1)]:''})
    }

    const saveOption = (e)=>{
        const ans = e.target.value

        const qus = curr_question + 1


        setAnswer({...answer_set,[parseInt(qus)]:ans})
    }


    const question_image = (data) => {
        if(data["img"]!=="" && data["img"] !== undefined){
            return <div><img src={require(`./images/quiz1/${data.img}`)} alt="image for question" style={{width: "400px",height: "300px"}}/></div>
        }
    }

    return (
        <div style={{marginLeft:"100px", marginTop:"50px"}}>
        {quizzes.map((data,index)=>{
            return(
                <div className="question" style={{display:curr_question!==25?curr_question===index?"":"none":"none"}}>
                <h2>Question:</h2>
                {question_image(data)}
                <div>{data["question"]}</div>
                <div>
                <h3>Choose the correct option</h3>
                <Row>
                <Col xs="6" style={{ marginTop:"10px"}}>
                <Button style={{backgroundColor:answer_set[curr_question+1]==="a"?answer_set[curr_question+1]===quizzes[index]["correct"]?"lightgreen":"red":"",width: "150px", height: "30px"}} onClick={saveOption} value="a">{data["a"]}</Button>
                </Col>
                <Col xs="6" style={{ marginTop:"10px"}}>
                <Button style={{backgroundColor:answer_set[curr_question+1]==="b"?answer_set[curr_question+1]===quizzes[index]["correct"]?"lightgreen":"red":"",width: "150px", height: "30px"}} onClick={saveOption} value="b">{data["b"]}</Button>
                </Col>
                </Row> 
                <Row>
                <Col xs="6" style={{ marginTop:"10px"}}>
                <Button style={{backgroundColor:answer_set[curr_question+1]==="c"?answer_set[curr_question+1]===quizzes[index]["correct"]?"lightgreen":"red":"",width: "150px", height: "30px"}} onClick={saveOption} value="c">{data["c"]}</Button>
                </Col>
                <Col xs="6" style={{ marginTop:"10px"}}>
                <Button style={{backgroundColor:answer_set[curr_question+1]==="d"?answer_set[curr_question+1]===quizzes[index]["correct"]?"lightgreen":"red":"",width: "150px", height: "30px"}} onClick={saveOption} value="d">{data["d"]}</Button>
                </Col>
                </Row> 
                </div>
                <br/>
                <div>
                <Button variant="success" onClick={nextQuestion} style={{ width: "100px", height: "40px", marginBottom:"20px", marginRight:"20px"}}>Next</Button>
                <Button variant="success" onClick={clearOption} style={{ width: "100px", height: "40px", marginBottom:"20px"}}>Clear</Button>

                </div>
                </div>
            )
        })}
        <div style={{display:curr_question===25?"":"none"}}>
        <img src={require(`./images/yay.jpg`)} style={{width: "200px",height: "200px"}}></img>
        <h1>You have successfully completed the test!</h1>
        <h2>Thank You for taking the test</h2>
        <br/>
        <h2>You may now exit this window</h2>
        <a href='/'><button>Click here to retake the test</button></a>
        </div>
        
        </div>
    )
}

export default Test;