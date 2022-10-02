const db = require("../configs/db");

class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  save() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = d.getMonth() + 1;
    const dd = d.getDate();

    const createdAtDate = `${yyyy}-${mm}-${dd}`;
    const sql = `
        INSERT INTO posts(
            title,
            body,
            created_at
        )
        VALUES(
            '${this.title}',
            '${this.body}',
            '${createdAtDate}'
        )
        `;
    return db.execute(sql);
  }

  static findAll() {
    const sql = "SELECT * FROM posts";
    return db.execute(sql);
  }

  static findById(id) {
    const sql = `SELECT * FROM posts WHERE id = ?`;
    return db.execute(sql, [id]);
  }
}

module.exports = Post;
