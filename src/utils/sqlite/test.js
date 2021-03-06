import React from 'react';


import SQLiteStorage from 'react-native-sqlite-storage';

SQLiteStorage.DEBUG(true);
const DB_NAME = 'MusicHouse.db'; // 数据库文件
const DB_VERSION = "1.0";//版本号
const DB_DISPLAY_NAME = "MusicHouseSQLite";
const DB_SIZE = -1;//-1应该是表示无限制
var db = null;

export default class SQLite extends React.Component {
  componentWillUnmount() {
    if (db) {
      this._successCB('close');
      db.close();
    } else {
      console.log('SQLiteStorage not open');
    }
  }

  open() {
    db = SQLiteStorage.openDatabase(
      DB_NAME,
      DB_VERSION,
      DB_DISPLAY_NAME,
      DB_SIZE,

      () => {
        this._successCB('open');
      },

      (err) => {
        this._errorCB('open', err);
      });

    return db;
  }

  createTable() {
    if (!db) {
      this.open();
    }

    //创建用户表
    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS USER(' +
        'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
        'name varchar,' +
        'age VARCHAR,' +
        'sex VARCHAR,' +
        'phone VARCHAR,' +
        'email VARCHAR,' +
        'qq VARCHAR)'
        , [], () => {
          this._successCB('executeSql');
        }, (err) => {
          this._errorCB('executeSql', err);
        });
    }, (err) => {//所有的 transaction都应该有错误的回调方法，在方法里面打印异常信息，不然你可能不会知道哪里出错了。
      this._errorCB('transaction', err);
    }, () => {
      this._successCB('transaction');
    })
  }

  deleteData() {
    if (!db) {
      this.open();
    }
    db.transaction((tx) => {
      tx.executeSql('delete from user', [], () => {

      });
    });
  }

  dropTable() {
    db.transaction((tx) => {
      tx.executeSql('drop table user', [], () => {

      });
    }, (err) => {
      this._errorCB('transaction', err);
    }, () => {
      this._successCB('transaction');
    });
  }

  insertUserData(userData) {
    let len = userData.length;
    if (!db) {
      this.open();
    }
    this.createTable();
    this.deleteData();
    db.transaction((tx) => {
      for (let i = 0; i < len; i++) {
        var user = userData[i];
        let name = user.name;
        let age = user.age;
        let sex = user.sex;
        let phone = user.phone;
        let email = user.email;
        let qq = user.qq;
        let sql = 'INSERT INTO user(name,age,sex,phone,email,qq) values(?,?,?,?,?,?)';
        tx.executeSql(sql, [name, age, sex, phone, email, qq], () => {
          }, (err) => {
            console.log(err);
          }
        );
      }
    }, (error) => {
      this._errorCB('transaction', error);
    }, () => {
      this._successCB('transaction insert data');
    });
  }

  close() {
    if (db) {
      this._successCB('close');
      db.close();
    } else {
      console.log("SQLiteStorage not open");
    }
    db = null;
  }

  _successCB(name) {
    console.log("SQLiteStorage " + name + " success");
  }

  _errorCB(name, err) {
    console.log("SQLiteStorage " + name);
    console.log(err);
  }

  render() {
    return null;
  }
};