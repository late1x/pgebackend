import { Sequelize } from "sequelize";

const db = new Sequelize('defaultdb', 'doadmin', 'AVNS_mKTTNQRoLWI3LS6il0N', {
    host: "db-mysql-tor1-37393-do-user-6926676-0.b.db.ondigitalocean.com",
    port: '25060',
    dialect: "mysql"
});

export default db;