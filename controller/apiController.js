const model = require("../model/model");

module.exports={

	index:(request,response)=>{
		model.getData((err,result)=>{
			data = {
				status : '1',
				rows : result
			}
			response.json(data);
		})	
	},

	store:(request,response)=>{

		body = request.body.data;
		model.store(body,(err,result)=>{
			status = result.affectedRows;
			response.json({status});
				// console.log(result.affectedRows);
		})		

	},

	update:(request,response)=>{
		body = request.body.data;
		model.updateData(body,(err,result)=>{
			status = result.affectedRows;
			response.json({status});
				// console.log(result.affectedRows);
		})
	},

	destroy:(request,response)=>{
		body = request.body;
		model.destroyData(body.id_laporan,(err,result)=>{
			status = result.affectedRows;
			response.json({status});
				// console.log(result.affectedRows);
		});
		
		
	}
}