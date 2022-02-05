const { User } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const APIUser = {
  signUp: async (req, res) => {
    const { email, password, nameUser, placeUser } = req.body;
    //tao chuoi ngau nhien
    const salt = bcryptjs.genSaltSync(10);
    //ma hoa mat khau
    const hashPasswd = bcryptjs.hashSync(password, salt);

    try {
      const existEmail = await User.findOne({ where: { email } });
      if (existEmail !== null) {
        res.send({ message: "Email này đã tồn tại" });
      } else {
        const newUser = await User.create({
          email,
          password: hashPasswd,
          nameUser,
          placeUser,
        });
        res.send(newUser);
      }
    } catch (error) {
      res.send(error);
    }
  },
  signIn: async (req, res) => {
    const { email, password } = req.body;
    try {
      const accountUser = await User.findOne({ where: { email } });
      if (accountUser) {
        const isPassword = bcryptjs.compareSync(password, accountUser.password);
        if (isPassword) {
          //tao token
          const payload = {
            id: accountUser.id,
            name: accountUser.nameUser,
            role: accountUser.role,
          };
          const secretKey = "guitarAD";
          const token = jwt.sign(payload, secretKey, {
            expiresIn: 24 * 60 * 60,
          });
          res.send({
            message: "Đăng nhập thành công",
            token,
            status: "OK",
          });
        } else {
          res.send({ message: "Sai mật khẩu", status: "PW ERROR" });
        }
      } else {
        res.send({
          message: "Không tìm thấy tài khoản này",
          status: "TK ERROR",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  getInfo: async (req, res) => {
    try {
      const { id } = req.user;
      let infoUser = await User.findByPk(id);
      res.send(infoUser);
    } catch (error) {
      console.log(error);
    }
  },
  accessAdmin: (req, res) => {
    try {
      res.send({ status: "access Admin" });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = {
  APIUser,
};
