// ### ACCOUNT FOR CEILING ###

	
	
			

	function compute_ceiling_area(){
				
		var ceiling_length_value = 0;
		var ceiling_width_value = 0;
		var ceiling_area_value = 0;
		
		ceiling_length_value = Number($('.ceiling_length').val());
		ceiling_width_value = Number($('.ceiling_width').val());
		
		ceiling_area_value = ceiling_length_value * ceiling_width_value;

		$('.overall_ceiling_area').html(ceiling_area_value);
		$('.ceiling_area').val(ceiling_area_value);

		return ceiling_area_value;

	} // compute_ceiling_area

	

// ### ACCOUNT FOR CEILING - END ###


// ### ACCOUNT FOR WALLS AND CEILING ###


	function compute_walls_ceiling_area(){
		
		
		var total_wall_area_value = 0;
		var total_ceiling_area_value = 0;
		
		total_wall_area_value = Number($('.overall_wall_area').html());
		total_ceiling_area_value = Number($('.overall_ceiling_area').html());
		
		var total_wall_ceiling_area = total_wall_area_value + total_ceiling_area_value;
		

		$('.overall_wall_ceiling_area').html(total_wall_ceiling_area);
		
	} // compute_walls_ceiling_area

	function compute_wall_ceiling_temp_diff(){
				
		var ceiling_outside_temperature_value = 0;
		var room_temp_value = 0;
		var wall_ceiling_temp_diff = 0;
		var average_temp_wall_ceiling = 0;
		
		
		average_temp_wall_ceiling  = Number($('.average_temp_walls_ceiling').val());
		room_temp_value  = Number($('.room_temperature_value').val());
		wall_ceiling_temp_diff = average_temp_wall_ceiling - room_temp_value;
		
		var walls_ceiling_temp_diff_format = decimal_two_places_format(wall_ceiling_temp_diff);
		
		$('.temp_diff_walls_ceiling').val(walls_ceiling_temp_diff_format);


		return wall_ceiling_temp_diff;

	} // compute_wall_ceiling_temp_diff

	function calculate_transmission_load_account_for_walls_ceiling_total(){
		
				
		transmission_load_ceiling_total = 0;
		var ceiling_object_detected_value = 0;
		var wall_object_detected_value = 0;
		var ceiling_area_value = 0;
		var walls_area_value = 0;
		var wall_ceiling_temp_diff_value = 0;
		var wall_ceiling_area_value = 0;		
		var u_value_wall_ceiling_final = 0;
		
		ceiling_object_detected_value = Number($('.ceiling_detected_value').val());
		wall_object_detected_value = Number($('.wall_detected_value').val());
		
		ceiling_area_value = Number($('.overall_ceiling_area').html());
		walls_area_value = Number($('.overall_walls_area').html());
		wall_ceiling_area_value = Number($('.overall_wall_ceiling_area').html());
		
		if(ceiling_object_detected_value === wall_object_detected_value){
			u_value_wall_ceiling_final =  wall_object_detected_value;
		}else{
			u_value_wall_ceiling_final =  wall_object_detected_value + ceiling_object_detected_value;
		}
		
		
		//walls_temperature_total = Number($('.overall_wall_area').val());
		wall_ceiling_temp_diff_value = compute_wall_ceiling_temp_diff();
		
		compute_walls_ceiling_area();
		
		transmission_load_wall_ceiling_total = (u_value_wall_ceiling_final * wall_ceiling_area_value * wall_ceiling_temp_diff_value * 24) / 1000;
		//transmission_load_wall_ceiling_total = (0.41 * 131 * 2.5 * 24) / 1000;
		// kWh/Day Value
		
		// FORMULA FOR TRANMISSION LOAD TOTAL - ACCOUNT FOR WALLS AND CEILING
		
		
		var transmission_load_walls_ceiling_kwh_day = 0;
		var transmission_load_walls_ceiling_wh_day = 0;
		var transmission_load_walls_ceiling_kwh = 0;
		var transmission_load_walls_ceiling_wh = 0;
		var transmission_load_walls_ceiling_btu_hr = 0;
		
		transmission_load_walls_ceiling_kwh_day = transmission_load_wall_ceiling_total;
		transmission_load_walls_ceiling_wh_day = kwh_day_to_wh_day(transmission_load_wall_ceiling_total);
		transmission_load_walls_ceiling_kwh = kwh_day_to_kwh(transmission_load_wall_ceiling_total);
		transmission_load_walls_ceiling_wh = kwh_day_to_wh(transmission_load_wall_ceiling_total);
		transmission_load_walls_ceiling_btu_hr = kwh_day_to_btu_hr(transmission_load_wall_ceiling_total);
	
		//$('.transmission_load_wall_ceiling_total').html(decimal_two_places_format(transmission_load_ceiling_total)+" kWh/Day");
		$('.transmission_load_account_for_walls_ceiling_kwh_day').html(decimal_two_places_format(transmission_load_wall_ceiling_total)+" kWh/Day");
		$('.transmission_load_account_for_walls_ceiling_wh_day').html(decimal_two_places_format(transmission_load_walls_ceiling_wh_day)+" Wh/Day");
		$('.transmission_load_account_for_walls_ceiling_kwh').html(decimal_two_places_format(transmission_load_walls_ceiling_kwh)+" kWh");
		$('.transmission_load_account_for_walls_ceiling_wh').html(decimal_two_places_format(transmission_load_walls_ceiling_wh)+" Wh");
		$('.transmission_load_account_for_walls_ceiling_btu_hr').html(decimal_two_places_format(transmission_load_walls_ceiling_btu_hr)+" BTU/Hr");
		
		
		$('.transmission_load_walls_ceiling').html(decimal_two_places_format(transmission_load_wall_ceiling_total)+" kWh/Day");
		
		return transmission_load_wall_ceiling_total;

	} // calculate_transmission_load_account_for_walls_ceiling_total

	function calculate_transmission_load_account_for_ceiling_total(){
		
				
		transmission_load_ceiling_total = 0;
		var ceiling_object_detected_value = 0;
		var ceiling_area_value = 0;
		var ceiling_temp_diff_value = 0;		
		var u_value_ceiling_final = 0;
		
		ceiling_object_detected_value = Number($('.ceiling_detected_value').val());
		
		ceiling_area_value = Number($('.overall_ceiling_area').html());
		
		u_value_ceiling_final =  ceiling_object_detected_value;
		
		//walls_temperature_total = Number($('.overall_wall_area').val());
		ceiling_temp_diff_value = Number($('.ceiling_outside_temperature').val()) - Number($('.room_temperature_value').val());
		
		compute_walls_ceiling_area();
		transmission_load_ceiling_total = (u_value_ceiling_final * ceiling_area_value * ceiling_temp_diff_value * 24) / 1000;
		//transmission_load_wall_ceiling_total = (0.41 * 131 * 2.5 * 24) / 1000;
		// kWh/Day Value
		
		// FORMULA FOR TRANMISSION LOAD TOTAL - ACCOUNT FOR WALLS AND CEILING
		
		
		var transmission_load_ceiling_kwh_day = 0;
		var transmission_load_ceiling_wh_day = 0;
		var transmission_load_ceiling_kwh = 0;
		var transmission_load_ceiling_wh = 0;
		var transmission_load_ceiling_btu_hr = 0;
		
		transmission_load_ceiling_kwh_day = transmission_load_ceiling_total;
		transmission_load_ceiling_wh_day = kwh_day_to_wh_day(transmission_load_ceiling_total);
		transmission_load_ceiling_kwh = kwh_day_to_kwh(transmission_load_ceiling_total);
		transmission_load_ceiling_wh = kwh_day_to_wh(transmission_load_ceiling_total);
		transmission_load_ceiling_btu_hr = kwh_day_to_btu_hr(transmission_load_ceiling_total);
	
		//$('.transmission_load_wall_ceiling_total').html(decimal_two_places_format(transmission_load_ceiling_total)+" kWh/Day");
		$('.transmission_load_account_for_ceiling_kwh_day').html(decimal_two_places_format(transmission_load_ceiling_total)+" kWh/Day");
		$('.transmission_load_account_for_ceiling_wh_day').html(decimal_two_places_format(transmission_load_ceiling_wh_day)+" Wh/Day");
		$('.transmission_load_account_for_ceiling_kwh').html(decimal_two_places_format(transmission_load_ceiling_kwh)+" kWh");
		$('.transmission_load_account_for_ceiling_wh').html(decimal_two_places_format(transmission_load_ceiling_wh)+" Wh");
		$('.transmission_load_account_for_ceiling_btu_hr').html(decimal_two_places_format(transmission_load_ceiling_btu_hr)+" BTU/Hr");
		
		
		// $('.transmission_load_walls_ceiling').html(decimal_two_places_format(transmission_load_wall_ceiling_total)+" kWh/Day");
		
		return transmission_load_ceiling_total;

	} // calculate_transmission_load_account_for_walls_ceiling_total
	
	function convert_kwh_btuhr(){
		
		
		
		return converted_value;
		
	} //


	
	
// ###  ACCOUNT FOR WALLS AND CEILING - END ###	


// ### ACCOUNT FOR FLOOR ###

	function compute_floor_area(){
				
		var floor_length_value = 0;
		var floor_width_value = 0;
		var floor_area_value = 0;
		
		floor_length_value = Number($('.floor_length').val());
		floor_width_value = Number($('.floor_width').val());
		
		floor_area_value = floor_length_value * floor_width_value;

		$('.overall_floor_area').html(floor_area_value);
		$('.floor_area').val(floor_area_value);

		return floor_area_value;

	} // compute_floor_area

	function calculate_transmission_load_account_for_floor_total(){
			
			
		transmission_load_floor_total = 0;
		var floor_object_detected_value = 0;
		var floor_area_value = 0;
		var floor_temp_diff_value = 0;
		
		floor_object_detected_value = Number($('.floor_detected_value').val());
		floor_area_value = Number($('.floor_area').val());
		floor_temp_diff_value = Number($('.temp_diff_floor').val());
		
		transmission_load_floor_total = (floor_object_detected_value * floor_area_value * floor_temp_diff_value * 24) / 1000;
		
		// FORMULA FOR TRANMISSION LOAD TOTAL - ACCOUNT FOR FLOOR
		
		var transmission_load_floor_kwh_day = 0;
		var transmission_load_floor_kwh = 0;
		var transmission_load_floor_wh_day = 0;
		var transmission_load_floor_wh = 0;
		var transmission_load_floor_btu_hr = 0;
		
		transmission_load_floor_kwh_day = transmission_load_floor_total;
		transmission_load_floor_kwh = kwh_day_to_kwh(transmission_load_floor_total);
		transmission_load_floor_wh_day = kwh_day_to_wh_day(transmission_load_floor_total);
		transmission_load_floor_wh = kwh_day_to_wh(transmission_load_floor_total);
		transmission_load_floor_btu_hr = kwh_day_to_btu_hr(transmission_load_floor_total);
	
		$('.transmission_load_floor_total_kwh_day').html(decimal_two_places_format(transmission_load_floor_kwh_day)+" kWh/Day");
		$('.transmission_load_floor_total_kwh').html(decimal_two_places_format(transmission_load_floor_kwh)+" kWh");
		$('.transmission_load_floor_total_wh_day').html(decimal_two_places_format(transmission_load_floor_wh_day)+" Wh/Day");
		$('.transmission_load_floor_total_wh').html(decimal_two_places_format(transmission_load_floor_wh)+" Wh");
		$('.transmission_load_floor_total_btu_hr').html(decimal_two_places_format(transmission_load_floor_btu_hr)+" BTU/Hr");
		
		
		$('.transmission_load_floor').html(decimal_two_places_format(transmission_load_floor_total)+" kWh/Day");
		
		return transmission_load_floor_total;
	

	} // calculate_transmission_load_account_for_floor_total
	
	function compute_floor_temp_diff(){
				
		floor_outside_temperature_value = 0;
		var room_temp_value = 0;
		var floor_temp_diff = 0;
		var average_temp_floor = "";
		
		average_temp_floor = $('.floor_outside_temperature').val();

		
		floor_outside_temperature_value = Number(average_temp_floor);
		room_temp_value  = Number($('.room_temperature_value').val());
		floor_temp_diff = floor_outside_temperature_value - room_temp_value;
		

		$('.average_temp_floor').val(floor_outside_temperature_value);
		$('.temp_diff_floor').val(floor_temp_diff);

		return floor_temp_diff;

	} // compute_floor_temp_diff


	
// ### ACCOUNT FOR FLOOR - END ###


// ### TRANSMISSION LOAD TOTAL CONVERSION


