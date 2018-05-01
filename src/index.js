import 'bootstrap';
import $ from 'jquery';
import './index.scss';

class MyTestClass {
  static main() {
    $('#title').text('Hello from index.js!');
  }
}

MyTestClass.main();
