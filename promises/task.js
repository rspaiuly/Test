const result = promiseFunction()

result.then(function (result) {
    console.log(`Промис ${typeof result === 'string' ? '' : 'НЕ'} работает ${typeof result === 'string' ? result : ''}`)
})