function kwh_day_to_wh_day(value_in_kwh_day){
	
	return value_in_kwh_day * 1000;
	
} // kwh_day_to_wh_day

function kwh_day_to_kwh(value_in_kwh_day){
	
	return value_in_kwh_day / 24;
	
} // kwh_day_to_kwh

function kwh_day_to_wh(value_in_kwh_day){
	
	return (value_in_kwh_day * 1000) / 24;
	
} // kwh_day_to_wh

function kwh_day_to_btu_hr(value_in_kwh_day){
	
	return value_in_kwh_day * 142.17;
	
} // kwh_day_to_btu_hr