package com.hanguyen.phoneshop.model;

public class PaymentDetails {

    private String paymentMethod;

    private String paymentStatus;

    private String paymentId;

    private String vnpayPaymentLinkId;

    private String vnpayPaymentLinkReferenceId;

    private String vnpayPaymentLinkStatus;

    private String vnpayPaymentId;

    public PaymentDetails() {
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public String getVnpayPaymentLinkId() {
        return vnpayPaymentLinkId;
    }

    public void setVnpayPaymentLinkId(String vnpayPaymentLinkId) {
        this.vnpayPaymentLinkId = vnpayPaymentLinkId;
    }

    public String getVnpayPaymentLinkReferenceId() {
        return vnpayPaymentLinkReferenceId;
    }

    public void setVnpayPaymentLinkReferenceId(String vnpayPaymentLinkReferenceId) {
        this.vnpayPaymentLinkReferenceId = vnpayPaymentLinkReferenceId;
    }

    public String getVnpayPaymentLinkStatus() {
        return vnpayPaymentLinkStatus;
    }

    public void setVnpayPaymentLinkStatus(String vnpayPaymentLinkStatus) {
        this.vnpayPaymentLinkStatus = vnpayPaymentLinkStatus;
    }

    public String getVnpayPaymentId() {
        return vnpayPaymentId;
    }

    public void setVnpayPaymentId(String vnpayPaymentId) {
        this.vnpayPaymentId = vnpayPaymentId;
    }
}
