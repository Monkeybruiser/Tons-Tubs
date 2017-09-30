<?php

    include('modules/layout/header.php' );

?>

<section class="banner">

    <div class="wrap">

        <h1 class="content--title">Have we got the tubs for you!</h1>

        <div class="banner--graphic">
            <?php

                echo file_get_contents('library/images/svgs/crate.svg');

            ?>
        </div>

    </div>

</section>

<section class="mid">

    <div class="wrap">

        <div class="grid">

            <?php

                $i		= 1;
                $max	= 4;

                while($i <= $max) :

                    $product_image              = true;
                    if($product_image) {
                        $product_image_alt      = '#';
                        $product_image_url      = 'library/images/_tmp/img-prod-00' . $i . '.jpg';
                    }
                    $product_name               = 'Ton\'s Tub ' . $i;
                    $product_desc               = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, nibh et porttitor consectetur, massa ligula sodales nulla, vel faucibus eros diam eu nisi. Vestibulum nec sapien vel leo vestibulum lobortis. Nam dui neque, lobortis non sagittis nec, venenatis at libero. Sed at libero libero.</p>';
                    $product_url                = '/product-page.php';

            ?>
            <div class="grid__col grid__col--1-of-2 grid__col--m-1-of-1 grid__col--l-1-of-1">

                <div class="product">

                    <?php

                        if($product_image) {

                    ?>
                    <a class="bg-image product--image" href="<?php echo $product_url; ?>" title="View more about <?php echo $product_name; ?>">
                        <img alt="<?php echo $product_image_alt; ?>" class="bg-image--src" src="<?php echo $product_image_url; ?>" />
                    </a>
                    <?php

                        }

                    ?>
                    <h2 class="product--title"><?php echo $product_name; ?></h2>
                    <?php

                        if($product_desc) {

                    ?>
                    <div class="product--desc">
                        <?php echo $product_desc; ?>
                    </div>
                    <?php

                        }

                    ?>
                    <p class="button-wrap"><a href="<?php echo $product_url; ?>" title="View more about <?php echo $product_name; ?>"><span>View</span></a></p>

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
