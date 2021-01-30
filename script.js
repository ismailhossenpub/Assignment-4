// main function
function handleFlightTicket(ticket, isIncrease) {
  const ticketCount = getInputValue(ticket);
  let ticketNewCount = ticketCount;
  if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (isIncrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }

  document.getElementById(ticket + "-count").value = ticketNewCount;
  let ticketTotal = 0;
  if (ticket == "firstClassTicket") {
    ticketTotal = ticketNewCount * 150;
    document.getElementById("firstClass").innerText = ticketNewCount;
  }
  if (ticket == "economy") {
    ticketTotal = ticketNewCount * 100;
    document.getElementById("economyClass").innerText = ticketNewCount;
  }
  TotalCalculation();
}

function TotalCalculation() {
  const firstClassTicketCount = getInputValue("firstClassTicket");
  const economyCount = getInputValue("economy");
  const totalPrice = firstClassTicketCount * 150 + economyCount * 100;
  document.getElementById("total-price").innerText = "$" + totalPrice;
  const vat = Math.round(totalPrice * 0.1);
  document.getElementById("vat-amount").innerText = "$" + vat;
  const grandTotal = totalPrice + vat;
  document.getElementById("grand-total").innerText = "$" + grandTotal;
  document.getElementById("totalCost").innerText = "$" + grandTotal;
}

function getInputValue(ticket) {
  const ticketInput = document.getElementById(ticket + "-count");
  const ticketCount = parseInt(ticketInput.value);
  return ticketCount;
}

//Click "Booking Now" button and show the success message
document
  .getElementById("bookingNowPart")
  .addEventListener("click", function () {
    const mainPart = document.getElementById("main-part");
    mainPart.style.display = "none";
    const extraFeature = document.getElementById("success-message");
    extraFeature.style.display = "block";
  });
