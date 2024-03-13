// if any operand is string, then + will concatenate strings
// 'number' + 3 = 'number3'
// 'number3' + 3 = 'number33'
'number' + 3 + 3; // 'number33'

// null becomes 0
// 0 + 3 = 3
null + 3; // 3

// 5 and "qwerty" are truthy values, so && will return last operand
5 && "qwerty"; // "qwerty"

// +'40' -> 40
// +'2' -> 2
// 40 + 2 = 42
// 42 + "hillel" = "42hillel"
+'40' + +'2' + "hillel"; // "42hillel"

// - will make 10 from '10'
// 10 - 5 = 5
// 5 === 6 -> false
'10' - 5 === 6; // false

// true -> 1
// false -> 0
// 1 + 0 = 1
true + false; // 1

// operator - works only with numbers, so it will try convert operands to number
// '4px' -> NaN
// NaN - 3 = NaN
'4px' - 3; // NaN

// '4' -> 4
// 4 - 3 = 1
'4' - 3; // 1

// ** has higher priority than binary +
// first 3 ** 0 = 1
// '6' + 1 = '61' (concat strings)
'6' + 3 ** 0; // '61'

// operator / works with numbers
// '6' -> 6
// 12 / 6 = 2
12 / '6'; // 2

// 5 === 6 -> false
// if any operand is string, then + will concatenate strings
// '10' + false = '10false'
'10' + (5 === 6); // '10false'

// operator == doesn't convert null to any type, so only truth is null == undefined
null == ''; // false

// (9 / 3) = 3
// 3 ** 3 = 27
3 ** (9 / 3); // 27

// !'false' -> false (string 'false' converted to bool type true, !true -> false)
// !false -> true
// !'true' -> false
// !false -> true
// true == true -> true
!!'false' == !!'true'; // true

// 0 -> false
// '0' -> true
// 1 -> true
// priority of && > ||
// '0' && 1 -> returns 1
// 0 || 1 -> returns 1
0 || '0' && 1; // 1

// +null -> 0
// 0 == false -> true
// true < 1
// true -> 1
// 1 < 1 -> false
(+null == false) < 1; // false

// false && true -> false
// false || true -> true
false && true || true; // true

// (false || true) -> true
// false && true -> false
false && (false || true); // false

// +null -> 0
// (0 == false) -> true (because 0 -> false)
// 1 ** 5 -> 1
// true < 1
// true < true -> false
(+null == false) < 1 ** 5; //false