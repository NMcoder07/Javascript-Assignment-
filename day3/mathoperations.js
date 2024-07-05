export function add()
{
    let a=document.getElementById("fn").value;
    let b=document.getElementById("sn").value;

        let s=parseInt(a)+parseInt(b);
        document.write("sum is " +s);
}
