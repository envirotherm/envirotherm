

function get_data_fill_product_load_temperature_display(total_wall_ceiling_temp,floor_outside_temp){

	var avg_temp_transmission_load = get_average_temp_transmission_load(total_wall_ceiling_temp,floor_outside_temp);
		
	var temp_diff_transmission_load = get_transmission_load_temp_diff(total_wall_ceiling_temp,floor_outside_temp);
		
	//$('.average_temp_transmission_load').val(avg_temp_transmission_load);
	$('.temp_diff_transmission_load').val(temp_diff_transmission_load);

	
	return avg_temp_transmission_load;
	
} // get_data_fill_product_load_temperature_display

function get_transmission_load_temp_diff(total_wall_ceiling_temp,floor_outside_temp){
	
	var avg_temp_transmission_load = get_average_temp_transmission_load(total_wall_ceiling_temp,floor_outside_temp);
	var room_temp_value = Number($('.room_temperature_value').val());
		
	var temp_diff_transmission_load = avg_temp_transmission_load - room_temp_value;
	
	return temp_diff_transmission_load;
	
} // get_transmission_load_temp_diff

function get_average_temp_transmission_load(){
	
	var avg_temp_walls_ceiling = 0;
	var avg_temp_floor = 0;
	
	var average_temp_transmission_load = 0;
	
	avg_temp_walls_ceiling = Number($('.average_temp_walls_ceiling').val());
	avg_temp_floor = Number($('.average_temp_floor').val());
	average_temp_transmission_load = (avg_temp_walls_ceiling + avg_temp_floor) / 6;
	
	//alert(avg_temp_walls_ceiling);

	
	return average_temp_transmission_load;
	
} // get_average_temp_transmission_load()