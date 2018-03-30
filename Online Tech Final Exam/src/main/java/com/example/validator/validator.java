package com.example.validator;

import com.example.models.calculator;
/**
 * Created by taks on 13/03/2017.
 */
public class validator {

    public boolean isValid(calculator calculator) {
        boolean result;
        if (calculator.getFirstNumber() == 0
                || calculator.getSecondNumber() == 0
                || calculator.getOperation() == ""
                || calculator.getOperation() == null) {
            result = false;
        } else {
            result = true;
        }

        return result;
    }
}
