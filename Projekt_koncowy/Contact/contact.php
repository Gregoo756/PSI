<?php
$pdo = new PDO(                         //tworzy obiekt PDO
  "mysql:host=localhost;dbname=trailforge;charset=utf8mb4",
  "root",                               //użytkownik
  "password",                           //hasło
  [ PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION ] //tryb błędów
);

/* 2) CZYTA I SPRAWDZA DANE Z FORMULARZA */
$name    = trim($_POST['name']    ?? '');   //imię (obcina spacje)
$email   = trim($_POST['email']   ?? '');   //e-mail
$message = trim($_POST['message'] ?? '');   //wiadomość

if (                                   //Jak coś nie jezt wypełnione poprawnie
  $name === '' ||                      //brak imienia
  !filter_var($email, FILTER_VALIDATE_EMAIL) || //zły e-mail
  $message === ''                      //brak tekstu
) {
  exit("Bad data.");                   //exit
}


$q = $pdo->prepare(                    //szykuje zapytanie
  "INSERT INTO contacts (name,email,message,created_at)
   VALUES (?,?,?,NOW())"
);
$q->execute([$name,$email,$message]);  //wstawia dane


$total = (int)$pdo                     //pobiera liczbę rekordów
          ->query("SELECT COUNT(*) FROM contacts")
          ->fetchColumn();


function ordinalSuffix(int $n): string {   //przyjmuje liczbę
  $spec = [11,12,13];                      //wyjątki 11-13
  foreach ($spec as $s) {                  //sprawdza wyjątki
    if ($n % 100 === $s) return 'th';      //zwraca „th”
  }

  return ['th','st','nd','rd','th','th','th','th','th','th'][$n % 10];
}
?>
<!DOCTYPE html> 
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TrailForge • Thanks</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="thank-you">
  <div class="thank-you-box">
    <h1>Thanks, <?= htmlspecialchars($name) ?>!</h1>            <!-- imię w HTML -->
    <p>Message received — we’ll reply soon.</p>                 <!-- info zwrotne -->
    <p><strong>
      This is contact #<?= $total . ordinalSuffix($total) ?>!
    </strong></p>                                               <!-- numer zgłoszenia -->
    <a href="contact.html" class="cta-button">Back</a>          <!-- powrót -->
  </div>
</body>
</html>
