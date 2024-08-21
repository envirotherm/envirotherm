

function get_data_fill_product_load_temperature_display(total_wall_ceiling_temp,floor_outside_temp){

	var avg_temp_transmission_load = (total_wall_ceiling_temp+floor_outside_temp) / 6;
	var room_temp_value = Number($('.room_temperature_value').val());
		
	var temp_diff_transmission_load = avg_temp_transmission_load - room_temp_value;
		
	$('.average_temp_transmission_load').val(avg_temp_transmission_load);
	$('.temp_diff_transmission_load').val(temp_diff_transmission_load);

	
	return avg_temp_transmission_load;
	
} // get_data_fill_product_load_temperature_display