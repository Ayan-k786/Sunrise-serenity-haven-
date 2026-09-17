
function wa(message){
 const phone="919767687687";
 window.open("https://wa.me/"+phone+"?text="+encodeURIComponent(message),"_blank");
}
document.querySelectorAll("[data-book]").forEach(b=>b.addEventListener("click",()=>wa("Hello Serenity Haven, I would like to enquire about booking the villa. Please share availability and pricing.")));
const form=document.querySelector("#bookingForm");
if(form) form.addEventListener("submit",e=>{
 e.preventDefault(); const d=new FormData(form);
 const msg=`Hello Serenity Haven, I want to book the villa.
Name: ${d.get("name")}
Check-in: ${d.get("checkin")}
Check-out: ${d.get("checkout")}
Guests: ${d.get("guests")}
Message: ${d.get("message")||""}`;
 window.open("https://wa.me/919767687687?text="+encodeURIComponent(msg),"_blank");
});

