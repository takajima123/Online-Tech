package com.example.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import com.example.models.calculator;
import com.example.models.message;
import com.example.validator.validator;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by taks on 13/03/2017.
 */
@RestController
public class controller {

    @RequestMapping(value = "/api/calculate", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<Object> performCalculation(@RequestBody calculator calculator) {
        validator validator = new validator();
        message message = new message();
        if (validator.isValid(calculator)) {
            double firstNumber = calculator.getFirstNumber();
            double secondNumber = calculator.getSecondNumber();
            double resultNumber;
            String stringResult;
            String operation = calculator.getOperation().toLowerCase();

            switch (operation) {
                case "add":
                    resultNumber = firstNumber + secondNumber;
                    stringResult = firstNumber + " plus " + secondNumber + " is " + resultNumber;
                    calculator.setResult(stringResult);
                    break;
                case "subtract":
                    resultNumber = firstNumber - secondNumber;
                    stringResult = firstNumber + " minus " + secondNumber + " is " + resultNumber;
                    calculator.setResult(stringResult);
                    break;
                case "multiply":
                    resultNumber = firstNumber * secondNumber;
                    stringResult = firstNumber + " times " + secondNumber + " is " + resultNumber;
                    calculator.setResult(stringResult);
                    break;
                case "divide":
                    resultNumber = firstNumber / secondNumber;
                    stringResult = firstNumber + " divided by " + secondNumber + " is " + resultNumber;
                    calculator.setResult(stringResult);
                    break;
            }

            return new ResponseEntity<>(calculator, HttpStatus.OK);
        } else {
            message.setMessage("Invalid Inputs");
            return new ResponseEntity<>(message, HttpStatus.BAD_REQUEST);
        }
    }
}
