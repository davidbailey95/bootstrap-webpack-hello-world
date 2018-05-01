import 'bootstrap';
import $ from 'jquery';
import './index.scss';

class MyTestClass {
  static main() {
    $('<h1>Hello, world!</h1>').appendTo('body');
  }
}

MyTestClass.main();
