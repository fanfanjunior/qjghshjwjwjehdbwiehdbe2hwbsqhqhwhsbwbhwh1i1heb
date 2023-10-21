exports.main = (req, res) => {
  res.redirect('/orders/plan/checkout');
};

exports.plan = (req, res) => {
  res.redirect('/orders/plan/checkout');
};

exports.plan_checkout = (req, res) => {
  const {
    plan,
    expired_plan_date
  } = req.query;
  
  res.render('orders-plan-checkout', {
    plan,
    expired_plan_date
  });
};

exports.plan_checkout_payment_method = (req, res) => {
  const {
    plan,
    expired_plan_date,
    custom_expired_plan_date,
    custom_expired_plan_date_unit,
    name,
    email,
    payment_method
  } = req.query;

  const prices = {
    'Basic': web_set.body.plan.monthly.basic.price_code,
    'Standard': web_set.body.plan.monthly.standard.price_code,
    'Premium': web_set.body.plan.monthly.premium.price_code,
    'Enterprise': web_set.body.plan.monthly.enterprise.price_code
  };

  const selectedPlanPrice = prices[plan] || 0;

  let totalPrice = 0;

  if (expired_plan_date === '1 year') {
    totalPrice = selectedPlanPrice * 12;
  } else if (expired_plan_date === '1 month') {
    totalPrice = selectedPlanPrice;
  } else if (expired_plan_date === 'Custom') {
    const customDateValue = parseFloat(custom_expired_plan_date);
    const dateUnit = custom_expired_plan_date_unit;

    if (!isNaN(customDateValue)) {
      const price = prices[plan] || 0;

      switch (dateUnit) {
        case 'day':
          totalPrice = customDateValue * price / 30;
          break;
        case 'week':
          totalPrice = customDateValue * price / 4;
          break;
        case 'month':
          totalPrice = customDateValue * price;
          break;
        case 'year':
          totalPrice = customDateValue * price * 12;
          break;
        default:
          totalPrice = 0;
          break;
      }
    }
  }

  const formattedTotalPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(totalPrice);

  let expiredPlanDate;
  if (expired_plan_date === 'Custom') {
    expiredPlanDate = custom_expired_plan_date + ' ' + custom_expired_plan_date_unit;
  } else {
    expiredPlanDate = expired_plan_date;
  }

  res.render('orders-plan-payment-method', {
    plan,
    expired_plan_date: expiredPlanDate,
    name,
    email,
    payment_method,
    total_price: formattedTotalPrice
  });
};
