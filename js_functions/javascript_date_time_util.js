

                function get_time_now(){
                            
                    var timezone = 'Asia/Manila';

                    time_hour = new Date();
                    //time_hour = time_hour.toLocaleString('en-US',{ timezone });
                    
                    var hour_value = time_hour.getHours();
                    var minute_value = time_hour.getMinutes();
                    var seconds_value = time_hour.getSeconds();
                    
                    var time_only = hour_value +":"+minute_value+":"+seconds_value;
                    
                    //$('.time_now').html(time_only);
                    
                    time_hr = hour_value * 100;
                    
                    $('.time_hr').html(time_hr);
                    $('.time_hr').val(time_hr);

                    
                    var full_hour = 0;
                    var ampm = "am";

                    if(hour_value > 12){
                        full_hour = hour_value-12;
                        ampm =  "pm";
                    }

                    $('.full_time_now').html(full_hour+":"+ minute_value+":"+seconds_value+" "+ampm);

                } // get_time_now


                function get_date_now(){

                    full_date = new Date();

                    var month = full_date.getMonth() + 1;
                    var month_value = get_month(month);
                    var date_of_year = full_date.getDate();
                    var year_now = full_date.getFullYear();

                    var full_date_formatted = month_value+" "+date_of_year+", "+year_now;
                
                    $('.calendar_date').html(full_date_formatted);

                } // get_date()

               
                function get_date_time_formatted(date_time_stamp){

                    var date_formatted = "";
                    var time_formatted = "";

                    var space_cat = new Array();
                    space_cat = date_time_stamp.split(" ");

                    var date_array = new Array();
                    date_array = space_cat[0].split("-");

                    var month_string = get_month(date_array[1]);

                    date_formatted = month_string+" "+date_array[2]+", "+date_array[0]; 
                    time_formatted = am_pm(space_cat[1],":");

                    return date_formatted+' '+time_formatted;

                }

                // returns a gregorian month label from a numeric month from date

                function get_date_formatted(date_time_stamp){

                    var date_formatted = "";
                

                    var space_cat = new Array();
                    space_cat = date_time_stamp.split(" ");

                    var date_array = new Array();
                    date_array = space_cat[0].split("-");

                    var month_string = get_month(date_array[1]);

                    date_formatted = month_string+" "+date_array[2]+", "+date_array[0]; 
                 

                    return date_formatted;

                } // get_date_formatted

                function get_month(m){

                    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                    var ndx = m - 1;

                    return months[ndx];
                }

                // converts military time to am_pm

                function am_pm(t,delim){

                    var formatted_time = "";
                    var meridian = "AM";
                    
                    var time_array = new Array();
                    time_array = t.split(delim);

                    var H = time_array[0];

                    var h = Number(H);

                    if(h > 12){
                        h = 12 - h;
                        meridian = "PM";
                    }
                   
                    if(h == 0){
                        h = 12;
                    }

                    h = Math.abs(h);
                 
                    var seconds = time_array[2];
                    formatted_time = h+delim+time_array[1]+" "+meridian;

                    return formatted_time;

                }

                // function that rounds off decimals into 2 places


            

                function decimal_two_places_format(value_here){
                    
                    var value = Number(value_here);
                    var digits = 2;

                    var result = (Math.round((value*Math.pow(10,digits)).toFixed(digits-1))/Math.pow(10,digits)).toFixed(digits);

					// //var no_last_decimal_zero = str.replace(/(\.\d*?[1-9])0+$/, '$1').replace(/\.0$/, '');

                    var no_last_decimal_zero = result.replace(/(\.\d*?[1-9])0+$/, '$1')
                                                     .replace(/\.0$/, '')
                                                     .replace(/\.0+$/, '');

                    // var value_array = [];
                    // var value_here = ""+value_here+"";
                    // value_array = value_here.split(".");
					
					// var value_decimal = 0;
					// var num_decimal_value = Number(value_array[1]);
					// value_decimal = num_decimal_value.toString();

                    // //no_last_decimal_zero = value_array[0]+"."+value_decimal;
                    // no_last_decimal_zero = value_array[0];
				 
                    return no_last_decimal_zero;

                }


                function no_decimal_places(value_here){
                    
                    var value = Number(value_here);
                    var to_minus = value % 100;

                    var new_value = value - to_minus;

                    var string_format_final_number = new_value;

                    return string_format_final_number;

                }

