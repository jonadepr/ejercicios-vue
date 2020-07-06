var app = new Vue({
    el: ".app",
    data: {
        message: "Mi primera calculadora en Vue",
        op1: "",
        op2: ""
    },
    methods: {

        ok: function () {
            if (this.op1 === "" || this.op2 === "") return false;
            else return true;
        },
        ok2: function () {
            if (this.op1 === "") return false;
            else return true;
        },
        resetOp: function () {
            this.op1 = "";
            this.op2 = "";
        }
    },
    computed: {
        suma: function () {
            return parseInt(this.op1) + parseInt(this.op2);
        },
        resta: function () {
            return this.op1 - this.op2;
        },
        multi: function () {
            return this.op1 * this.op2;
        },
        potencia: function () {
            return this.op1 * this.op1;

        }
    }
})
