// console.log(process.argv);
total = 0;
for (i = 2; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
}
// console.log("total = ", total);
console.log(total);