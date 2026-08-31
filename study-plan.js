const timeInput=document.getElementById("schedule-time");
const dateInput=document.getElementById("schedule-date");
const subjectInput=document.getElementById("schedule-subject");
const subjectError=document.getElementById("subject-error");
const saveBtn=document.getElementById("save-btn");
const savedSection=document.getElementById("saved-section");
const savedDisplay=document.getElementById("saved-display");
const STORAGE_KEY="mindstep_saved_plans";
let savedPlans=JSON.parse(localStorage.getItem(STORAGE_KEY))||[];
if(!Array.isArray(savedPlans)){savedPlans=[];}
function saveToStorage(){localStorage.setItem(STORAGE_KEY,JSON.stringify(savedPlans));}
function createId(){return Date.now().toString()+Math.random().toString(16).slice(2);}

function collectScheduleData(){
const date=dateInput.value;
const subject=subjectInput.value.trim();
const time=timeInput.value;
subjectError.textContent="";
if(!subject){
subjectError.textContent="Subject is required.";
subjectInput.focus();
return null;
}
return{id:createId(),date:date||"Not specified",subject:subject,time:time||"Not specified"};
}

function clearForm(){
dateInput.value="";
subjectInput.value="";
timeInput.value="";
subjectError.textContent="";
}

function savePlan(){
const newPlan=collectScheduleData();
if(!newPlan)return;
savedPlans.push(newPlan);
saveToStorage();
clearForm();
renderSavedPlans();
}

function renderSavedPlans(){
savedDisplay.innerHTML="";
if(savedPlans.length===0){
savedSection.classList.add("hidden");
return;
}
savedSection.classList.remove("hidden");
savedPlans.forEach((plan,index)=>{
const card=document.createElement("div");
card.className="plan-card";
const title=document.createElement("div");
title.className="plan-number";
title.textContent=`Study Plan ${index+1}`;
const deleteButton=document.createElement("button");
deleteButton.type="button";
deleteButton.className="delete-plan";
deleteButton.textContent="×";
deleteButton.title="Delete this plan";
deleteButton.addEventListener("click",function(){deletePlan(plan.id);});
const table=document.createElement("table");
const thead=document.createElement("thead");
const headerRow=document.createElement("tr");
const dateHeader=document.createElement("th");
dateHeader.textContent="Date";
const subjectHeader=document.createElement("th");
subjectHeader.textContent="Subject";
const timeHeader=document.createElement("th");
timeHeader.textContent="Time";
headerRow.appendChild(dateHeader);
headerRow.appendChild(subjectHeader);
headerRow.appendChild(timeHeader);
thead.appendChild(headerRow);
const tbody=document.createElement("tbody");
const row=document.createElement("tr");
const dateCell=document.createElement("td");
dateCell.textContent=plan.date;
const subjectCell=document.createElement("td");
subjectCell.textContent=plan.subject;
const timeCell=document.createElement("td");
timeCell.textContent=plan.time;
row.appendChild(dateCell);
row.appendChild(subjectCell);
row.appendChild(timeCell);
tbody.appendChild(row);
table.appendChild(thead);
table.appendChild(tbody);
card.appendChild(title);
card.appendChild(deleteButton);
card.appendChild(table);
savedDisplay.appendChild(card);
});
}


function deletePlan(planId){
savedPlans=savedPlans.filter(function(plan){return plan.id!==planId;});
saveToStorage();
renderSavedPlans();
}

saveBtn.addEventListener("click",savePlan);
subjectInput.addEventListener("keydown",function(event){
if(event.key==="Enter"){
event.preventDefault();
savePlan();
}
});

document.addEventListener("DOMContentLoaded",function(){renderSavedPlans();});
function showBookingPopup(){document.getElementById("bookingPopup").classList.add("show");}
function closeBookingPopup(){document.getElementById("bookingPopup").classList.remove("show");}