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
console.log(`month=${month}`)

// 日付を生成
const dt = new Date(year, month, 1)
console.log(`${dt}`)

const week = dt.getDay()
// カレンダー出力
console.log(`     ${year}年 ${month + 1}月`)
console.log('日 月 火 水 木 金 土')

// 最初の改行のスペースの数
const blank = ('   ')
process.stdout.write(blank.repeat(week))

// 日付をループしたいので、月の最終日の日付取得
const lastDate = new Date(year, month + 1, 0)
const lastDay = lastDate.getDate()

// 日付出力
for (let i = 1; i <= lastDay; i++) {
  const ljustDay = ('  ' + i).slice(-2)
  process.stdout.write(`${ljustDay} `)

  // 土曜日の改行の処理、曜日取得
  const outputDayWeek = new Date(year, month, i).getDay()
  if (outputDayWeek === 6) {
    console.log('')
  }
}
console.log('')
