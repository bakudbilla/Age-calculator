const output_year = document.querySelector('.output-year');
const output_month = document.querySelector('.output-month');
const output_day = document.querySelector('.output-day');
const submit_btn = document.querySelector('.submit-btn');

let isvalid = false;
const input_year = document.querySelector('#year');
const input_month = document.querySelector('#month');
const input_day = document.querySelector('#day');
//const submit_btn = document.querySelector('.output-day');
const error_day = document.querySelector('.error-day');
const error_month = document.querySelector('.error-month');
const error_year = document.querySelector('.error-year');
input_day.addEventListener("input", (e) => {
    if (+input_day > 31) {
        error_day.textContent = "must be a valid date";
        isvalid = false;
        return;
    } else {
        isvalid = true;
        error_day.textContent = "";
    }

    if (+input_day.value == 0) {
        isvalid = false;
        error_day.textContent = "This field is required";
        isvalid = false;
        return;
    } else {
        error_day.textContent = "";


    }
});


input_month.addEventListener("input", (e) => {
    if (+input_month > 12) {
        error_month.textContent = "must be a valid date";
        isvalid = false;
        return;
    } else {
        isvalid = true;
        error_month.textContent = "";
    }

    if (+input_month.value == 0) {
        isvalid = false;
        error_month.textContent = "This field is required";
        isvalid = false;
        return;
    } else {
        error_month.textContent = "";
    }
});
input_year.addEventListener("input", (e) => {
    if (+input_year > 2024) {
        error_day.textContent = "must be a valid date";
        isvalid = false;
        return;
    } else {
        isvalid = true;
        error_year.textContent = "";
    }

    if (+input_year.value == 0) {
        isvalid = false;
        error_year.textContent = "This field is required";
        isvalid = false;
        return;
    } else {
        error_year.textContent = "";
    }
});