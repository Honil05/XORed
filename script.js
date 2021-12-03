function XORed(lo, hola, k)
{
    let x = 0;
    for (let i =
    parseInt(Math.log(k) / Math.log(2)); i >= 0; --i)
    {
        if (lo & (1 << i))
        {
            if (x + (1 << i) - 1 < hola)
                x ^= (1 << i);
        }
        else
        {
            if ((x ^ (1 << i)) <= k)
                x ^= (1 << i);
        }
    }
    return lo ^ x;
}
 
    let lo = 3, hola = 4, k = 6;
    console.log(`The output is ${XORed(lo, hola, k)} when a = ${lo} , b = ${hola} and limit is ${k}`);