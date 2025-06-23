import Script from 'next/script';

const ConvertKitForm = () => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <form action="https://app.kit.com/forms/8220430/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="8220430" data-uid="4681dd9360" data-format="inline" data-version="5" data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}' min-width="400 500 600 700 800"><div data-style="clean"><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="false" class="seva-fields formkit-fields"><div class="formkit-field"><input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email" style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 8px; font-weight: 400; background-color: rgb(249, 250, 251); padding: 16px; font-size: 16px; width: 100%; margin-bottom: 12px;"></div><button data-element="submit" class="formkit-submit formkit-submit" style="color: rgb(255, 255, 255); background-color: rgb(22, 119, 190); border-radius: 8px; font-weight: 600; padding: 16px 32px; font-size: 18px; width: 100%; border: none; cursor: pointer; transition: background-color 0.2s;"><div class="formkit-spinner"><div></div><div></div><div></div></div><span class="">Update me!</span></button></div><div class="formkit-powered-by-convertkit-container"><a href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic" data-element="powered-by" class="formkit-powered-by-convertkit" data-variant="dark" target="_blank" rel="nofollow">Built with Kit</a></div></div></form>
          `
        }}
      />
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" />
    </>
  );
};

export default ConvertKitForm; 