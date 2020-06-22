let str = '|/-\\|/-\\|';
str = str + '\n';

const loopThroughSplittedText = function(splittedText) {
  splittedText.forEach(function(text, i) {
    setTimeout(() => {
      process.stdout.write('\r' + text) ;
    }, i * 200)
  })
}

loopThroughSplittedText(str.split(''));

