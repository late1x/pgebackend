import { Sequelize } from "sequelize";

const db = new Sequelize('defaultdb', 'doadmin', 'AVNS_WjfwCp_5VMXavrB1YM9', {
    host: "db-mysql-tor1-29885-do-user-6926676-0.b.db.ondigitalocean.com",
    port: '25060',
    dialect: "mysql"
});

export default db;