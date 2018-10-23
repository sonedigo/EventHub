module.exports={
	successSender:function(info, res){
		res.status(200).send(info);
	},
	errorSender:function(info, res){
		res.status(400).send(info);
	},

}