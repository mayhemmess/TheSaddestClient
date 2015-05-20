window.GlobalUtils = {
	
	serverAddress: 'http://localhost:3000/',

	makeDate: function(str)
	{
		date = new Date();
		date.setDate(str.substring(8, 10));
		date.setMonth(str.substring(5, 7));
		date.setYear(str.substring(0, 4));
		
		return date;
	},
	
	getMonth: function(month)
	{
		switch (month)
		{
			case 0: return "Enero";
			case 1: return "Febrero";
			case 2: return "Marzo";
			case 3: return "Abril";
			case 4: return "Mayo";
			case 5: return "Junio";
			case 6: return "Julio";
			case 7: return "Agosto";
			case 8: return "Septiembre";
			case 9: return "Octubre";
			case 10: return "Noviembre";
			case 11: return "Diciembre";
			default: return "Inválido";
		}
	}
};
