const student = {
    name: 'jhon',
    strandad: 10,
    rule: 3,
    group: 'since'
}
const test = Object.entries(student);
console.log(test);

const {name, strandad, rule, group} = student;
console.log(name, strandad,rule, group);
console.log(`${name} in class ${strandad} her rule is ${rule} and her group is ${group}`);

const keys = Object.keys(student);
console.log(keys)

for(const key in student){
    const value = student[key];
    console.log(key,value);
}

