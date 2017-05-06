import { Component } from '@angular/core';
import { test } from './test';

@Component({
    selector: 'de2',
    templateUrl: 'de.component.html',
    styleUrls: ['de.component.css'],

})

export class De2Component {
    tests: test[] = [
        {
            name_que: "Tìm số nhỏ nhất trong các số sau.",
            name_link: "",
            conten_ques: "34, 56, 32, 45, 50, 37",
            input_ans: "",
            true_ans: 32
        },
        {
            name_que: "Thực hiện phép tính",
            name_link: "",
            conten_ques: "28 + 36 = ??? ",
            input_ans: "",
            true_ans: 64
        },
        {
            name_que: "Đếm số hình tam giác hiện trên hình vẽ.(Chỉ đếm những hình được nối bởi 3 điểm)",
            name_link: "./assets/image/tamgiac.jpg",
            conten_ques: "",
            input_ans: "",
            true_ans: 6
        },
        {
            name_que: "Tìm số lớn nhất trong các số sau",
            name_link: "",
            conten_ques: "35, 24, 47, 29, 36 ",
            input_ans: "",
            true_ans: 47
        },
        {
            name_que: "Số lớn nhất trong các số sau ?",
            name_link: "",
            conten_ques: "56, 45, 34, 78, 49, 23",
            input_ans: "",
            true_ans: 78
        },
        {
            name_que: "Thực hiện phép tính sau.",
            name_link: "",
            conten_ques: "77 - 47 = ???",
            input_ans: "",
            true_ans: 30
        },
        {
            name_que: "Thực hiện phép tính sau.",
            name_link: "",
            conten_ques: "32 + 20 = ???",
            input_ans: "",
            true_ans: 52
        },
        {
            name_que: "Đếm số cá xuất hiện trong hình.",
            name_link: "./assets/image/5ca.png",
            conten_ques: "",
            input_ans: "",
            true_ans: 5
        },
        {
            name_que: "Thực hiện phép tính sau.",
            name_link: "",
            conten_ques: "60 - 30 = ???",
            input_ans: "",
            true_ans: 30
        },
         {
            name_que: "Thực hiện phép tính sau.",
            name_link: "",
            conten_ques: "40 + 30 = ???",
            input_ans: "",
            true_ans: 70
        }

    ];
    x = 0;
    showGuide = true;
    showChoice = false;
    first = true;
    cauhoi() {
        this.showGuide = false;
        for (var i = 0; i < this.tests.length; i++) {
            var d1 = document.createElement("DIV");
            d1.setAttribute("class", "panel panel-body panel-primary");
            d1.setAttribute("id", "q" + i);
            document.getElementById("divQues").appendChild(d1); // thêm panel vào col
            // tạo tên câu hỏi h3
            var h3 = document.createElement("H3");
            var txt1 = document.createTextNode(this.tests[i].name_que);
            h3.appendChild(txt1);
            document.getElementById("q" + i).appendChild(h3); // thêm h3 vào panel
            // tạo hình ảnh
            var img = document.createElement("IMG");
            img.setAttribute("src", this.tests[i].name_link);
            document.getElementById("q" + i).appendChild(img);    // thêm img vào panel
            //tạo nội dung nếu là tính toán h2
            var h2 = document.createElement("H2");
            var txt2 = document.createTextNode(this.tests[i].conten_ques);
            h2.appendChild(txt2);
            document.getElementById("q" + i).appendChild(h2);     // thêm h2 vào panel
            // tạo input h2, input
            var ip = document.createElement("INPUT");
            ip.setAttribute("type", "text");
            ip.setAttribute("id", "ip" + i);
            ip.setAttribute("style", "text-align: center");
            document.getElementById("q" + i).appendChild(ip);
        }
        this.showChoice = true;

    }

    checkAns() {
        this.first = false;
        var j;
        var diem = 0 ; 
        for (j = 0; j < this.tests.length; j++) {
            var txtkq = (<HTMLInputElement>document.getElementById("ip" + j)).value;
            if (parseInt(txtkq) == this.tests[j].true_ans) {
                diem = diem + 1;
            }
            else diem = diem + 0;
        }
        typeof diem;
        var d1 = diem.toString();
        var txt2 = document.createTextNode(d1);
        document.getElementById("scoreValue").appendChild(txt2);
    }
}