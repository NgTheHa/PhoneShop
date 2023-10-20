package com.hanguyen.phoneshop.response;

import com.hanguyen.phoneshop.model.Order;

//
//public class ApiResponse {
//    private String message;
//    private boolean status;
//
//    public ApiResponse() {
//    }
//
//    public String getMessage() {
//        return message;
//    }
//
//    public void setMessage(String message) {
//        this.message = message;
//    }
//
//    public boolean isStatus() {
//        return status;
//    }
//
//    public void setStatus(boolean status) {
//        this.status = status;
//    }
//
//    public ApiResponse(String message, boolean status) {
//        this.message = message;
//        this.status = status;
//    }
//}
public class ApiResponse {
    private Order data;
    private boolean status;
    private String message;

    public ApiResponse() {
    }

    public ApiResponse(Order data, boolean status, String message) {
        this.data = data;
        this.status = status;
        this.message = message;
    }

    public Order getData() {
        return data;
    }

    public void setData(Order data) {
        this.data = data;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
