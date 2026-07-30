# Switching tbdetailing.com.au to the new website

Hi Tyler — this connects your domain name to your new website. It takes about
5 minutes, it's all copy-and-paste, and your email will not be affected.
You can do it any time; the switch finishes on its own within the hour.

---

## Step 1 — Log in

Go to **www.cheaperdomains.com.au** and click **Login** (top right).

Use the email and password for your CheaperDomains account.
Forgotten the password? Click "Forgot password" — the reset link goes to your email.

## Step 2 — Open your domain's DNS settings

1. Once logged in, find **My Domains** (or "Domain Manager").
2. Click on **tbdetailing.com.au**.
3. Look for a button or tab called **DNS Settings**, **Manage DNS**, or
   **Zone Records** and click it.

You'll see a table of records. Don't worry about what they all mean —
we're only touching the ones listed below.

## Step 3 — Update the website records

**⚠️ Only change records of type "A" or the "www" record. Do NOT touch
anything that says "MX" or "mail" — those run your email.**

### 3a. The "A" records

Find the rows of type **A** for `tbdetailing.com.au` (the Name/Host box may
show `@`, be blank, or say `tbdetailing.com.au` — they're currently pointing
at `35.172.94.1` and `100.24.208.97`).

**Delete those old A records**, then add these four new **A** records
(same Name/Host as the old ones, one record per line):

| Type | Name/Host | Value (points to) |
|------|-----------|-------------------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

*(If the form won't accept `@`, leave the Name box empty or type
`tbdetailing.com.au` — different systems label it differently.)*

### 3b. The "www" record

Find the record where the Name/Host is **www**.

- If it's type **CNAME**: change its value to `ansonxu19.github.io`
- If it's type **A**: delete it, then add a new **CNAME** record:

| Type | Name/Host | Value (points to) |
|------|-----------|-------------------|
| CNAME | www | ansonxu19.github.io |

*(Note: no "www." and no "https://" in that value — just `ansonxu19.github.io`)*

## Step 4 — Save

Click **Save** / **Save Changes**. That's it — you're done.

## Step 5 — Wait (nothing to do)

The internet takes a little while to notice the change — usually under an
hour, occasionally up to a day. During that time some people may still see
the old site. No downtime, nothing is broken.

When it's done, **tbdetailing.com.au** will show your new website with the
secure padlock, automatically.

---

## Common questions

**Will my email stop working?**
No — as long as only the records above are changed. Your email
(tyler@tbdetailing.com.au) runs on separate "MX" records that we're not touching.

**What about my old website?**
It just stops being visited. Once you've confirmed the new site is live at
tbdetailing.com.au, you can cancel the old website subscription (Duda) and
stop paying for it. Don't cancel it before the new site is live.

**What if I get stuck or something looks different?**
Stop, take a screenshot of the screen you're on, and send it to Anson —
don't guess. Nothing is broken until you press Save, so it's always safe
to just close the page and try later.

**Something went wrong after saving?**
Send Anson a message straight away — the change is fully reversible in
about 2 minutes.
