function get_equipment_load_fan_motor(div_class_output, qty_of_fans, fan_running_time_in_hrs, fan_motor_rating){


	var equipment_load_row_fan_motor_total = 0;

	equipment_load_row_fan_motor_total = Number(qty_of_fans) * Number(fan_running_time_in_hrs) * Number(fan_motor_rating);
	equipment_load_row_fan_motor_total = equipment_load_row_fan_motor_total/1000;
	
	var equipment_load_row_fan_motor_total_kwh = kwh_day_to_kwh(equipment_load_row_fan_motor_total);
	var equipment_load_row_fan_motor_total_wh_day = kwh_day_to_wh_day(equipment_load_row_fan_motor_total);
	var equipment_load_row_fan_motor_total_wh = kwh_day_to_wh(equipment_load_row_fan_motor_total);
	var equipment_load_row_fan_motor_total_btu_hr = kwh_day_to_btu_hr(equipment_load_row_fan_motor_total);

	$('.'+div_class_output+'').html(equipment_load_row_fan_motor_total+" kWh/Day");
	// $('.'+div_class_output+'_kwh_day').html(equipment_load_row_fan_motor_total+" kWh/Day");
	// $('.'+div_class_output+'_kwh').html(equipment_load_row_fan_motor_total_kwh+" kWh");
	// $('.'+div_class_output+'_wh_day').html(equipment_load_row_fan_motor_total+" Wh/Day");
	// $('.'+div_class_output+'_wh').html(equipment_load_row_fan_motor_total+" Wh");
	// $('.'+div_class_output+'_btu_hr').html(equipment_load_row_fan_motor_total+" BTU/Hr");

	return equipment_load_row_fan_motor_total;
	
} // get_equipment_load_fan_motor