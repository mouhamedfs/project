package reactspr.web.rest;

import reactspr.domain.Direction;
import reactspr.domain.Localisation;
import reactspr.repository.DirectionRepository;
import reactspr.repository.LocalisationRepository;
import reactspr.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link reactspr.domain.Departement}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class DirectionResource {

    private final Logger log = LoggerFactory.getLogger(DirectionResource.class);

    private static final String ENTITY_NAME = "Direction";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DirectionRepository directionRepository;

    public DirectionResource(DirectionRepository directionRepository) {
        this.directionRepository = directionRepository;
    }

    /**
     * {@code POST  /direction} : Create a new Direction.
     *
     * @param direction the direction to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with
     *         body the new direction, or with status {@code 400 (Bad Request)}
     *         if the direction has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/direction")
    public ResponseEntity<Direction> createDirection(@Valid @RequestBody Direction direct) throws URISyntaxException {
        log.debug("REST request to save Direction : {}", direct);
        if (direct.getCdir() != null) {
            throw new BadRequestAlertException("A new Direction cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Direction result = directionRepository.save(direct);
        return ResponseEntity.created(new URI("/api/direction/" + result.getCdir()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getCdir().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /direction} : Updates an existing direction.
     *
     * @param direction the direction to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the updated direction, or with status {@code 400 (Bad Request)} if
     *         the direction is not valid, or with status
     *         {@code 500 (Internal Server Error)} if the direction couldn't be
     *         updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/direction")
    public ResponseEntity<Direction> updateDirection(@Valid @RequestBody Direction direct) throws URISyntaxException {
        log.debug("REST request to update Direction : {}", direct);
        if (direct.getCdir() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Direction result = directionRepository.save(direct);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, 
                        direct.getCdir().toString()))
            .body(result);
    }

    /**
     * {@code GET  /direction} : get all the direction.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list
     *         of direction in body.
     */
    @GetMapping("/direction")
    public List<Direction> getAllDirection() {
        log.debug("REST request to get all direction");
        return directionRepository.findAll();
    }

    /**
     * {@code GET  /direction/:cdir} : get the "cdir" Direction.
     *
     * @param cdir the cdir of the Direction to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body
     *         the Direction, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/direction/{cdir}")
    public ResponseEntity<Direction> getDirection(@PathVariable Long cdir) {
        log.debug("REST request to get Direction : {}", cdir);
        Optional<Direction> dir = directionRepository.findById(cdir);
        return ResponseUtil.wrapOrNotFound(dir);
    }

    /**
     * {@code DELETE  /direction/:cdir} : delete the "cdir" Direction.
     *
     * @param cdir the cdir of the Direction to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/direction/{cdir}")
    public ResponseEntity<Void> deleteDirection(@PathVariable Long cdir) {
        log.debug("REST request to delete Direction : {}", cdir);
        directionRepository.deleteById(cdir);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, 
                cdir.toString())).build();
    }
}
