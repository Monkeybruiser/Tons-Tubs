<?php

    include('modules/layout/header.php' );

?>

<section class="banner">

    <div class="wrap">

        <h1 class="content--title">Have we got the tubs for you</h1>

        <div class="">
            <img alt="#" src="http://placehold.it/300x200" />
        </div>

    </div>

</section>

<section class="">

    <div class="wrap">

        <div class="grid">

            <?php

                $i		= 1;
                $max	= 5;

                while($i <= $max) :

                    $product_image              = true;
                    if($product_image) {
                        $product_image_alt      = '#';
                        $product_image_url      = 'http://placehold.it/800x500';
                    }
                    $product_name               = 'Tub name here';
                    $product_desc               = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, nibh et porttitor consectetur, massa ligula sodales nulla, vel faucibus eros diam eu nisi. Vestibulum nec sapien vel leo vestibulum lobortis. Nam dui neque, lobortis non sagittis nec, venenatis at libero. Sed at libero libero.</p>';
                    $product_url                = '#';

            ?>
            <div class="grid__col grid__col--1-of-2 grid__col--m-1-of-1 grid__col--l-1-of-1">

                <div class="">

                    <?php

                        if($product_image) {

                    ?>
                    <div class="">
                        <img alt="<?php echo $product_image_alt; ?>" src="<?php echo $product_image_url; ?>" />
                    </div>
                    <?php

                        }

                    ?>
                    <h2 class=""><?php echo $product_name; ?></h2>
                    <?php

                        if($product_desc) {

                    ?>
                    <div class="">
                        <?php echo $product_desc; ?>
                    </div>
                    <?php

                        }

                    ?>
                    <p class="button-wrap"><a href="<?php echo $product_url; ?>" title="View more about <?php echo $product_name; ?>">View</a></p>

                </div>

            </div>
            <?php

                    $i++;

                endwhile;

            ?>

        </div>

    </div>

</section>

<?php

    include('modules/layout/footer.php' );

?>
