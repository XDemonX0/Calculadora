import { Text, View } from "react-native"
import { colors, styles } from "../../config/theme/appTheme"
import { useCalculator } from "../hooks/useCalculator";
import { CalculatorButton } from "../../components/CalculatorButton";

export const CalculatorScreen = () => {
    const { number,
        prevNumber,
        buildNumber,
        toogleSign,
        clean,
        deleteOperation,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult, } = useCalculator();

    return(
        <View style={styles.calculatorContainer}>
        <View style={{ paddingHorizontal: 30, paddingBottom: 20}}>
            <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={styles.mainResult}
            >{number}</Text>
            <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={styles.subResult}
            >{(prevNumber === '0') ? '': prevNumber}</Text>
        </View>

        <View style={styles.row}>
            <CalculatorButton onPress={ deleteOperation } label='C' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ toogleSign } label='+/-' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ clean } label='del' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ divideOperation } label='/' color={colors.orange} />
        </View>

        <View style={styles.row}>
            <CalculatorButton onPress={ () => buildNumber('7') } label='7' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ () => buildNumber('8') } label='8' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ () => buildNumber('9') } label='9' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ multiplyOperation } label='x' color={colors.orange} />
        </View>

        <View style={styles.row}>
            <CalculatorButton onPress={ () => buildNumber('4') } label='4' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ () => buildNumber('5') } label='5' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ () => buildNumber('6') } label='6' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ subtractOperation } label='-' color={colors.orange} />
        </View>

        <View style={styles.row}>
            <CalculatorButton onPress={ () => buildNumber('1') } label='1' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ () => buildNumber('2') } label='2' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ () => buildNumber('3') } label='3' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ addOperation } label='+' color={colors.orange} />
        </View>

        <View style={styles.row}>
            <CalculatorButton onPress={ () => buildNumber('0') } label='0' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ () => buildNumber(',') } label=',' blackText color={colors.lightGray} />
            <CalculatorButton onPress={ calculateResult } label='=' color={colors.orange} />
        </View>

    </View>
    )
}