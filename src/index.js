import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import Picker from 'antd-mobile/lib/picker';
import List from 'antd-mobile/lib/list';
import InputItem from 'antd-mobile/lib/input-item'
import {pickerData, pickerLdata} from './data';
import {calendar} from './base'
export default class DateTimeFuture extends Component {
	constructor() {
		super();
		this.state = {
			value: [2000, 1, 1, 0, 0],
			lvalue: [2000, 1, 1, 0],
			bzValue: null,
			nYear: '甲子',
			nMonth: '甲子',
			nDay: '甲子',
			nHour: '甲子',
		}
	}
    onSelectDateTime(value) {
		console.log(value, 'value')
        this.setState({value: value});
    }
	onSelectLdateTime(value) {
		console.log(value, 'lvalue')
		this.setState({lvalue: value});
	}
	dateFormat(values) {
		console.log(values, 'values');
		let str = "";
		for (let i in values) {
			str += values[i].label;
			if (i == 2) {
				str += "  ";
			}
			if (i == 3) {
				str += ":";
			}
		}
		//console.log(str, 'str');
		return str;
	}
	ldateFormat(values) {
		console.log(values, 'values');
		let obj = calendar.lunar2solar(
			values[0].value,
			values[1].value > 12 ? values[1].value - 12 : values[1].value,
			values[2].value,
			values[1].value > 12,
			values[3].value,
		);
		let str = "";
		for (let i in values) {
			str += values[i].label;
			if (i == 0) {
				str += obj.Animal + '年';
			} 
		}
		str += '(' + obj.gzYear + obj.gzMonth + obj.gzDay + obj.gzH + ')';
		//this.setState({bzValue: bzstr});
		
		return str;
		return "";
	}
	render() {
		return (
			<View style={styles.container}>
				<View>
					<List>
						<Picker
							title='公历'
							data={pickerData}
							cols={5}
							value={this.state.value}
							onChange={this.onSelectDateTime.bind(this)}
							format={this.dateFormat.bind(this)}
						>
							<List.Item multipleLine arrow="horizontal">选择公历</List.Item>
						</Picker>
						<Picker
							title='农历'
							data={pickerLdata}
							cols={4}
							value={this.state.lvalue}
							onChange={this.onSelectLdateTime.bind(this)}
							format={this.ldateFormat.bind(this)}
						>
							<List.Item multipleLine arrow="horizontal">农历</List.Item>
						</Picker>
						
					</List>
				</View>
				<View style={[styles.flexRow, {margin: 32}]}>
					<View style={styles.flexRow}><Text>{this.state.nYear}</Text></View>
					<View style={styles.flexRow}><Text>{this.state.nMonth}</Text></View>
					<View style={styles.flexRow}><Text>{this.state.nDay}</Text></View>
					<View style={styles.flexRow}><Text>{this.state.nHour}</Text></View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	flexRow: {
		flex: 1,
		flexDirection: 'row'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});