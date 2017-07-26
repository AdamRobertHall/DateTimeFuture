import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import {Picker} from 'antd-mobile';
import {pickerData, pickerLdata} from './data';
export default class DateTimeFuture extends Component {
    onSelectDateTime(value) {
        console.log(value, 'value')
    }
	onSelectLdateTime(value) {
		console.log(value, 'value')
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to DateTimeFuture
				</Text>
				<Picker
                    title='公历'
                    data={pickerData}
                    cols={4}
                    onOk={this.onSelectDateTime(value).bind(this)}
				/>
				<Picker
                    title='公历'
                    data={pickerLdata}
                    cols={4}
                    onOk={this.onSelectLdateTime(value).bind(this)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
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