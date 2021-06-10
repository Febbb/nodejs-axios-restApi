
const axios = require('axios');



module.exports={

	index:(request,response)=>{

		axios.get('http://localhost:3010/api/index').then(function(result){
			response.render('index',{data:result.data.rows});
		});
	
	},

	store:(request,response)=>{

		const data = {
				nama : request.body.nama,
				keterangan : request.body.keterangan,
				status : request.body.status
					};

		axios.post('http://localhost:3010/api/store',{data}).then(function(result){
			response.redirect('http://localhost:3010/index')
		})
	},


	update:(request,response)=>{
		
		const data = {
				id_laporan : request.body.id_laporan,
				nama : request.body.nama,
				keterangan : request.body.keterangan,
				status : request.body.status
					};

		axios.put('http://localhost:3010/api/update?_method=PUT',{data}).then(function(result){
			response.redirect('http://localhost:3010/index')
		});
	},

	destroy:(request,response)=>{

		const data = {
				id_laporan : request.params.id_laporan
					};

		axios.delete('http://localhost:3010/api/destroy',{data}).then(function(result){
			response.redirect('http://localhost:3010/index')
				});
			
		
		
	}

}
