const dateToday = new Date()
let month = 0
let year = 0

// オプションの処理
const argv = require('minimist')(process.argv.slice(2))
if (argv.y) {
  year = argv.y
} else {
  year = dateToday.getFullYear()
}

if (argv.m) {
  month = argv.m - 1
} else {
  month = dateToday.getMonth()
}

// 日付を生成
const dt = new Date(year, month, 2)
const week = dt.getDay()

// 月の最終日の日付取得
function getLastDate (date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}
const lastDate = getLastDate(dt)
const lastDay = lastDate.getDate()

// カレンダー出力
console.log(`     ${year}年 ${month + 1}月`)
console.log('月 火 水 木 金 土 日')

// 最初の改行のスペースの数
const firstBlank = week * 3 - 3
if (firstBlank === -3) {
  process.stdout.write('                  ')
}
for (let i = 0; i < firstBlank; i++) {
  process.stdout.write(' ')
};

// 土曜日の改行の処理
let saturdayNewLine = week
for (let i = 1; i <= lastDay; i++) {
  const ljustDay = ('  ' + i).slice(-2)
  process.stdout.write(`${ljustDay} `)
  // 土曜日がきたら改行
  if (saturdayNewLine % 7 === 0) {
    console.log('')
  }
  saturdayNewLine += 1
}
console.log('')
