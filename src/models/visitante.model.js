import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Visitante = sequelize.define('Visitante', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
  telefone: { type: DataTypes.STRING, allowNull: true }
});

export default Visitante;