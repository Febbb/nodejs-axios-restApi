const db = require("../config/db");

module.exports = {
	getData:(callback)=>{
		db.query(`SELECT * FROM tabel_laporan`,callback);
	},

	store:(body,callback)=>{
		db.query(`

				INSERT INTO tabel_laporan SET 
				nama = '${body.nama}',
				keterangan = '${body.keterangan}',
				status = '${body.status}',
				created_at = now(),
				updated_at = now()

				 `,callback);
	},

	getOneData:(id,callback)=>{
		db.query(`SELECT * FROM tabel_laporan WHERE id_laporan = '${id}' `,callback);
	},

	updateData:(body,callback)=>{
		db.query(`

				UPDATE tabel_laporan SET 
				nama = '${body.nama}',
				keterangan = '${body.keterangan}',
				Status = '${body.status}',
				updated_at = now() WHERE id_laporan = '${body.id_laporan}'


			`,callback);
	},

	destroyData:(id,callback)=>{
		db.query(`DELETE FROM tabel_laporan WHERE id_laporan = '${id}' `,callback);
	}

}