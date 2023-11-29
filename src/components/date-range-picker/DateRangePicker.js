import { Alert, StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
const initialDate = moment().format('YYYY-MM-DD');

const DateRangePicker = ({ hanldeCancel, handleSave, onStartDay, onEndDay }) => {
    const [startDay, setStartDay] = useState(initialDate);
    const [endDay, setEndDay] = useState(null);
    const [marked, setMarked] = useState({});

    const onDayPress = (day) => {
        if (!startDay || (startDay && endDay)) {
            setStartDay(day.dateString);
            setEndDay(null);
            onStartDay(day.dateString);
            onEndDay(null)
        } else {
            // Chọn ngày kết thúc nếu đã có ngày bắt đầu
            if (moment(day.dateString).isSameOrAfter(startDay)) {
                setEndDay(day.dateString);
                setupMarkedDates(startDay, day.dateString);
                onEndDay(day.dateString)
            } else {
                setStartDay(day.dateString);
                setEndDay(null);
                onStartDay(day.dateString);
                onEndDay(null)
            }
        }
    }

    const setupMarkedDates = (start, end) => {
        let markedDates = {};

        markedDates[start] = { selected: true, startingDay: true, color: 'blue', textColor: 'white' };

        let currentDate = moment(start);
        while (currentDate.add(1, 'days').diff(end) < 0) {
            const currentDateString = currentDate.clone().format('YYYY-MM-DD');
            markedDates[currentDateString] = { selected: true, color: 'blue', textColor: 'white' };
        }

        // Đánh dấu ngày kết thúc
        markedDates[end] = { selected: true, endingDay: true, color: 'blue', textColor: 'white' };
        setMarked(markedDates);
    }

    return (
        <View>
            <CalendarList
                current={initialDate}
                minDate={initialDate}
                onDayPress={onDayPress}
                calendarHeight={390}
                horizontal={true}
                hideArrows={true}
                pagingEnabled={true}
                markedDates={marked}
            />
            <Button
                style={styles.button}
                title="Save"
                onPress={handleSave} />
        </View>
    )
}

export default DateRangePicker;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4344E5',
        height: 40,
    },
});
