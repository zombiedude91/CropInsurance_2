const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/db.connect')

class UserInfo extends Model {}
UserInfo.init({
  UserInfoID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  UserID: { type: DataTypes.INTEGER, allowNull: false },
  TitleName: { type: DataTypes.STRING, allowNull: false },
  FirstName: { type: DataTypes.STRING, allowNull: false },
  LastName: { type: DataTypes.STRING, allowNull: false },
  PhoneNo: { type: DataTypes.STRING, allowNull: false },
  ProfilePic: { type: DataTypes.STRING, allowNull: false, defaultValue: 'DefaultUserPicture.png' },
  Province: { type: DataTypes.STRING, allowNull: false },
  District: { type: DataTypes.STRING, allowNull: false },
  SubDistrict: { type: DataTypes.STRING, allowNull: false },
  MoreAddress: { type: DataTypes.STRING, allowNull: false },
  LatLong: { type: DataTypes.STRING, allowNull: false },
  fullName: {
    type: DataTypes.VIRTUAL,
    get () {
      return `${this.TitleName} ${this.FirstName} ${this.LastName}`
    },
    set (value) {
      throw new Error('Do not try to set the `fullName` value!')
    }
  },
  fullAddress: {
    type: DataTypes.VIRTUAL,
    get () {
      return `${this.MoreAddress}, ${this.SubDistrict}, ${this.District}, ${this.Province}`
    },
    set (value) {
      throw new Error('Do not try to set the `fullAddress` value!')
    }
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'UserInfo',
  indexes: [{ unique: true, fields: ['UserInfoID'] }],
})

export default UserInfo