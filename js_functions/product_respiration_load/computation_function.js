
function get_total_product_respiration_load(overall_product_load_mass){
	
	var respiration_constant = 1.9;
	var product_respiration_load_total_value = 0;
	
	product_respiration_load_total_value = (overall_product_load_mass * respiration_constant)/3600; // in kWh/Day
	
	return product_respiration_load_total_value;
	
} // get_total_product_respiration_load

